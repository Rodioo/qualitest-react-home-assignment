type SlideshowReducerAction = {
  type: 'START_SLIDESHOW' | 'STOP_SLIDESHOW' | 'RESTART_SLIDESHOW' | 'CANCEL_SLIDESHOW' | 'SHOW_NEXT_SLIDE';
  length?: number;
}

type SlideshowReducerState = {
  isRunning: boolean;
  currentUserIndex: number;
}

const slideshowReducer = (state: SlideshowReducerState, action: SlideshowReducerAction) => {
  switch (action.type) {
    case 'START_SLIDESHOW':
      return {
        ...state,
        isRunning: true,
      }
    case 'STOP_SLIDESHOW':
      return {
        ...state,
        isRunning: false,
      }
    case 'RESTART_SLIDESHOW':
      return {
        ...state,
        isRunning: true,
        currentUserIndex: 0,
      }
    case 'CANCEL_SLIDESHOW':
      return {
        ...state,
        isRunning: false,
        currentUserIndex: 0,
      }
    case 'SHOW_NEXT_SLIDE':
      return {
        ...state,
        currentUserIndex: (state.currentUserIndex + 1) % action.length!!
      }
  }
}

export default slideshowReducer