import React from "react";

export interface Club {
  id?: number;
  name?: string;
  manager?: number;
  picture?: string | null;
  intro?: string;
  duration?: number;
  state?: string;
  online?: number | null;
  offline?: number | null;
  description?: string;
  views?: number | null;
  head_count?: number;
  weekday?: number | null;
  weekend?: number | null;
  hashtags?: string | null;
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
      state: boolean,
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
