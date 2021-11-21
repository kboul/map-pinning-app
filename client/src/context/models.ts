import { Dispatch } from "react";

interface Pin {
  createdAt: string;
  description: string;
  lat: number;
  lng: number;
  rating: number;
  title: string;
  updatedAt: string;
  username: string;
  _id: number;
}

interface State {
  pins: Pin[];
}

interface Action {
  type: string;
  payload: {
    [property: string]: any;
  };
}

interface ContextProps {
  state: any;
  dispatch: Dispatch<Action>;
}

export type { Action, ContextProps, Pin, State };