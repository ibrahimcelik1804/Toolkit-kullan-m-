import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addTask, editTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, close, editItem }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const formData = new FormData(e.target);
    const task = Object.fromEntries(formData.entries());
    if (editItem) {
      dispatch(editTask({ ...task, id: editItem.id }));
    } else {
      dispatch(addTask(task));
    }

    close();
  };
  return (
    <div>
      <Modal onHide={close} show={isOpen} className="text-black" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editItem ? "Görevi Güncelle" : "Yeni Görev Oluştur"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="my-3">
              <Form.Label>Görev Tanımı</Form.Label>
              <Form.Control
                defaultValue={editItem?.title}
                required
                type="text"
                name="title"
                placeholder="Görevi Giriniz"
              />
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label>İsminiz</Form.Label>
              <Form.Control
                defaultValue={editItem?.author}
                required
                type="text"
                name="author"
                placeholder="İsminizi Giriniz"
              />
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label>Atanan</Form.Label>
              <Form.Control
                defaultValue={editItem?.assigned_to}
                required
                type="text"
                name="assigned_to"
                placeholder="Kime Atandığını Giriniz"
              />
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label>Son Teslim Tarihi</Form.Label>
              <Form.Control
                defaultValue={editItem?.end_date}
                required
                type="date"
                name="end_date"
              />
            </Form.Group>
            <Button type="button" onClick={close} variant="secondary">
              Vazgeç
            </Button>
            <Button type="submit">Kaydet</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};
export default FormModal;
