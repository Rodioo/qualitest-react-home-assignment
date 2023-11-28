import React, {FC, Fragment, useEffect, useReducer} from "react";
import slideshowReducer from "../../reducers/slideshowReducer";
import {useAppSelector} from "../../../../store/hooks";
import {UserCard} from "../UserCard/UserCard";
import {Error} from "../../../../components/Error/Error";
import {Button} from "../../../../components/Button/Button";
import {Loading} from "../../../../components/Loading/Loading";

interface Props {}

export const Slideshow: FC<Props> = () => {
  const fetchedUsers = useAppSelector((state) => state.fetchedUsers)

  const [state, dispatch] = useReducer(slideshowReducer, {
    isRunning: false,
    currentUserIndex: 0
  })

  const {isRunning, currentUserIndex} = state

  useEffect(() => {
    if (isRunning) {
      const changeUserInterval = setInterval(() => {
        dispatch({type: 'SHOW_NEXT_SLIDE', length: fetchedUsers.users.length})
      }, 2000)

      return () => clearInterval(changeUserInterval)
    }
  }, [isRunning, fetchedUsers.users.length])

  useEffect(() => {
    if (fetchedUsers.users.length > 0) {
      dispatch({type: 'RESTART_SLIDESHOW'})
    } else {
      dispatch({type: 'CANCEL_SLIDESHOW'})
    }
  }, [fetchedUsers]);

  const handleButtonClick = () => {
    if (isRunning) {
      dispatch({type: 'STOP_SLIDESHOW'})
    } else {
      dispatch({type: 'START_SLIDESHOW'})
    }
  }

  return (
    <Fragment>
      {
        fetchedUsers.status === 'LOADING'
          ? <Loading />
          : null
      }
      {
        fetchedUsers.status === 'DONE' && fetchedUsers.users[currentUserIndex]
          ? <UserCard
              user={fetchedUsers.users[currentUserIndex]}
              currentIndex={currentUserIndex}
              numberOfUsers={fetchedUsers.users.length}
            />
          : null
      }
      {
        fetchedUsers.status === "DONE"
          ? <Button ariaLabel='Start/Stop Slideshow' variant={'primary'} onClick={handleButtonClick}>
            {isRunning ? "Stop" : "Start"}
          </Button>
          : null
      }
      {
        fetchedUsers.status === 'ERROR'
          ? <Error
            error={{
              title: 'Error',
              text: fetchedUsers.errorMessage!!
            }}
          />
          : null
      }
    </Fragment>
  )
};