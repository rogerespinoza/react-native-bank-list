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

export const initialError: ErrorType = {
  id: { state: false, label: '' },
  name: { state: false, label: '' },
  description: { state: false, label: '' },
  logo: { state: false, label: '' },
};
