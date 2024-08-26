import styled from "styled-components";
import { Colors } from "../../components/Colors/Colors"; // Adjust the import if necessary

export const MainTrackParcel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
    height: 100vh; /* Ensure full-screen height on small screens */
  }
`;

export const BreadcrumbContainer = styled.div`
  padding-top: 10px;
  padding-left: 50px;
  padding-bottom: 100px;
  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
    padding-top: 10px;
    padding-left: 8px;
  }
`;

export const TrackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background: ${Colors.darkBlue};

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
    height: 100vh; /* Ensure full-screen height on small screens */
    width: 100%;
    max-height: 70rem;
  }
`;

export const BreadcrumbText = styled.p`
  color: ${Colors.darkBlue};
  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

export const TrackText = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: white;
  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

export const SliderContainer = styled.div`
  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-bottom: 80px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

export const EnterConsignmentText = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: center;
  color: ${Colors.darkPurple};
  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
  font-size: 15px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-content: center;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 5px;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: ${Colors.darkBlue};
  border-radius: 9px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 15px;
  width: 100%;
  border: 1px solid ${Colors.darkBlue};
  border-radius: 4px;

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

export const Button = styled.button`
  height: 45px;
  width: 200px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #0056b3;
  }

  /* Large screens */
  @media (min-width: 901px) and (max-width: 2500px) {
    /* No changes needed */
  }

  /* Medium screens */
  @media (min-width: 601px) and (max-width: 900px) {
    /* No changes needed */
  }

  /* Small screens */
  @media (max-width: 600px) {
  }
`;

export const Result = styled.p`
  margin-top: 20px;
  font-weight: bold;
  color: ${(props) => (props.error ? 'red' : 'green')};
`;