import {ChangeEvent, FC, useCallback, useEffect, useState} from "react";
import debounce from "lodash.debounce"

import {ErrorMessage, StyledInput} from "./styles";
import {isValidInputNumber} from "./utils";
import {useAppDispatch} from "../../store/hooks";
import {onError, onLoading, onReset, onSuccess} from "../../features/users/redux/fetchedUsersSlice";
import {User} from "../../features/users/types";

interface Props {
}

type NumberInput = {
  value?: number;
  text: string;
}

export const Input: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const [numberToFetch, setNumberToFetch] = useState<NumberInput>({
    value: undefined,
    text: ''
  })
  const [error, setError] = useState<string>()

  const debouncedFetchUsers = useCallback(debounce((numberOfUsers: number) => {
    dispatch(onLoading())

    const BASE_URL = "https://randomuser.me/api/"
    const FETCH_USERS_URL = `${BASE_URL}?results=${numberOfUsers}`
    const FETCH_USERS_OPTIONS = {
      method: "GET"
    }

    fetch(FETCH_USERS_URL, FETCH_USERS_OPTIONS)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users from API. Please try again')
        }

        return response.json()
      })
      .then((data) => {
        dispatch(onSuccess(data.results as User[]))
      })
      .catch((error) => {
        dispatch(onError(error.message))
      });
  }, 300), [])

  useEffect(() => {
    if (!numberToFetch.value || numberToFetch.value <= 0) {
      debouncedFetchUsers.cancel();
      dispatch(onReset())
      return
    }

    debouncedFetchUsers(numberToFetch.value)
  }, [numberToFetch])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const inputValue = event.target.value

    setNumberToFetch((prevState) => ({
      ...prevState,
      text: inputValue
    }))

    if (inputValue === '') {
      setNumberToFetch((prevState) => ({
        ...prevState,
        value: undefined
      }))
      setError(undefined)
    } else if (isValidInputNumber(inputValue)) {
        setNumberToFetch((prevState) => ({
          ...prevState,
          value: inputValue
        }))
        setError(undefined)
    } else {
      setNumberToFetch((prevState) => ({
        ...prevState,
        value: undefined
      }))
      setError('Please enter a valid positive non-null number')
    }
  }

  return (
    <div>
      <StyledInput
        $invalid={!numberToFetch.value}
        type='text'
        placeholder='🔍 Enter the number of users to fetch'
        value={numberToFetch.text}
        onChange={handleInputChange}
      />
      {error
        ? <ErrorMessage>{error}</ErrorMessage>
        : null
      }
    </div>
  )
};
