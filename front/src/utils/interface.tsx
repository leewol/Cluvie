export interface Club {
  id?: number;
  name?: string;
  picture?: string | null;
  intro?: string;
  online?: number | null;
  offline?: number | null;
  weekday?: number | null;
  weekend?: number | null;
  description?: string;
  hashtags?: string | null;
  views?: number | null;
  head_count?: number;
  duration?: number;
  state?: string;
  manager?: number;
}
