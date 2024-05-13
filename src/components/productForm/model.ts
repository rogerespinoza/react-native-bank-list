export interface ErrorType {
  id: {
    state: boolean;
    label: string;
  };
  name: {
    state: boolean;
    label: string;
  };
  description: {
    state: boolean;
    label: string;
  };
  logo: {
    state: boolean;
    label: string;
  };

  [key: string]: { state: boolean; label: string };
}
