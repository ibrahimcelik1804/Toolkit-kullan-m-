import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setCount } from "../redux/slices/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.counterSlice);

  return (
    <div className="d-flex gap-4 justify-content-center align-items-center vh-100 ">
      <ButtonGroup size="lg" className="flex  mb-2">
        <Button
          onClick={() => dispatch(decrease())}
          className="p-3 fw-bold fs-4"
          variant="primary"
        >
          Azalt
        </Button>
        <Button variant="outline-success" className=" p-4 fw-bold fs-4">
          {state.count}
        </Button>
        <Button
          onClick={() => dispatch(increase())}
          className="p-3 fw-bold fs-4"
          variant="danger"
        >
          Artır
        </Button>
      </ButtonGroup>
      <Button
        onClick={() => dispatch(setCount(100))}
        className="fw-bold fs-5 rounded-4"
        variant="warning"
      >
        Sıfırla
      </Button>
    </div>
  );
};

export default Counter;
