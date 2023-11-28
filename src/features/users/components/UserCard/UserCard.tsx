import React, {FC} from "react";
import {User} from "../../types";
import {StyledUserCard} from "./styles";

type Props = {
  user: User;
  currentIndex: number;
  numberOfUsers: number;
}

export const UserCard: FC<Props> = ({ user , currentIndex, numberOfUsers}) => (
  <StyledUserCard>
    <span className='index'>{currentIndex + 1}/{numberOfUsers}</span>
    <img src={user.picture.large} alt='User' width='250px' height='250px'/>
    <p>{`${user.name.first} ${user.name.last}`}</p>
  </StyledUserCard>
);