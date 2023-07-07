

interface Vacation {

  type: string;
  dataFrom: string;
  dataTo: string;
  comment: string;
  daysNumber: string;
  id: string;
}

interface State {
  vacation: Vacation[];
}

const initialState: State = {
  vacation: [
    {
      type: "Urlop Wypoczynkowy",
      dataFrom: "20.03.2023",
      dataTo: "20.07.2023",
      comment: "Przykładowa notatka",
      daysNumber: "2",
      id: "1",
    },
  ],
};

type Action =
  | { type: "DELETE_VACATION"; payload: { id: string } }
  | { type: "ADD_VACATION"; payload: { vacation: Vacation } }

const noteReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "DELETE_VACATION":
      return {
        ...state,
        vacation: state.vacation.filter((item) => item.id !== action.payload.id),
      };
    case "ADD_VACATION":
      return { ...state, vacation: [...state.vacation, action.payload.vacation] };
    default:
      return state;
  }
};

export default noteReducer;
