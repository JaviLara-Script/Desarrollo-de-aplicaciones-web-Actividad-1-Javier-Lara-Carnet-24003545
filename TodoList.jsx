import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const TodoList = () => {
  return (
    <Card className="p-4 shadow todo-card">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Tarea</Form.Label>
          <Form.Control type="text" placeholder="Escribe tu tarea..." />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Fecha límite</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mb-3">
          Agregar Tarea
        </Button>
      </Form>

      <h5 className="mt-4">Tareas pendientes</h5>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Terminar maqueta
          <span className="badge bg-success">25/04/2025</span>
        </li>
      </ul>
    </Card>
  );
};

export default TodoList;
