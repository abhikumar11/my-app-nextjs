"use client";

import { User } from "@/types/user.types";
import { Col, Row, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const handleFormSubmit = (data: User) => {
    console.log(data);
  };

  return (
    <Container>
      <Row className="mb-4 align-items-center">
        <Col md={12}>
          <h2>User Form</h2>
        </Col>
      </Row>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Row className="mb-3 align-items-center">
          <Col md={4}>
            <label>User Name</label>
          </Col>
          <Col md={4}>
            <input
              className="form-control"
              {...register("username", {
                required: "Username is required",
                maxLength: { value: 30, message: "Maximum 30 characters" },
              })}
            />
          </Col>
          <Col md={4}>
            {errors.username && <span className="text-danger">{errors.username.message}</span>}
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col md={4}>
            <label>Email</label>
          </Col>
          <Col md={4}>
            <input
              type="email"
              className="form-control"
              {...register("email", {
                required: "Email is required",
                maxLength: { value: 30, message: "Maximum 30 characters" },
              })}
            />
          </Col>
          <Col md={4}>
            {errors.email && <span className="text-danger">{errors.email.message}</span>}
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col md={4}>
            <label>Password</label>
          </Col>
          <Col md={4}>
            <input
              type="password"
              className="form-control"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Minimum 8 characters" },
              })}
            />
          </Col>
          <Col md={4}>
            {errors.password && <span className="text-danger">{errors.password.message}</span>}
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <button type="submit" className="btn btn-primary">Save</button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default UserForm;