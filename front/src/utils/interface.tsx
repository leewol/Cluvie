import React from "react";

export interface Club {
  id?: number;
  name?: string;
  manager?: number;
  picture?: string;
  intro?: string;
  duration?: number;
  state?: string;
  online?: number;
  offline?: number;
  description?: string;
  views?: number;
  head_count?: number;
  weekday?: number;
  weekend?: number;
  hashtags?: string;
}

export interface ClubState {
  clubInfo: Club;
  setClubInfo: React.Dispatch<
    React.SetStateAction<{
      name: string,
      manager: number,
      picture: string,
      intro: string,
      duration: number,
      state: string,
      online: number,
      offline: number,
      description: string,
      views: number,
      head_count: number,
      weekday: number,
      weekend: number,
    }>
  >;
}
