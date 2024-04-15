import React, { useState } from "react";
import { Button, ButtonGroup, Stack, Table } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../components/FormModal";
import { deleteTask } from "../redux/slices/crudSlice";

const CrudPage = () => {
  const CounterState = useSelector((store) => store.counterSlice);
  const crudState = useSelector((store) => store.crudSlice);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [editItem, setEditItem] = useState(null);
  console.log(editItem);
  return (
    <div className="px-3">
      <Stack className="align-items-end my-4 ">
        <Button onClick={() => setIsOpen(true)}>
          <FaPlus className="mx-2" />
          Yeni Görev Ekle
        </Button>
      </Stack>
      {/* modal */}
      <FormModal
        isOpen={isOpen}
        editItem={editItem}
        close={() => {
          setIsOpen(false);
          setEditItem(null);
        }}
      />
      <Table
        striped
        bordered
        hover
        responsive
        variant={CounterState.is_dark_theme ? "light" : "dark"}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Görev</th>
            <th>Yazan</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {crudState.tasks.map((task, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button
                    onClick={() => dispatch(deleteTask(task.id))}
                    variant="danger"
                  >
                    Sil
                  </Button>
                  <Button
                    onClick={() => {
                      setEditItem(task);
                      setIsOpen(true);
                    }}
                  >
                    Düzenle
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;
