import { ReactNode } from "react";

type ErrorBoundaryProps = {
    children: ReactNode;
  };
  
export function ErrorBoundary({ children }: ErrorBoundaryProps) {
    try {
        return children;
    }
    catch(error){
      return <h1>Something went wrong.</h1>;
    }
  }