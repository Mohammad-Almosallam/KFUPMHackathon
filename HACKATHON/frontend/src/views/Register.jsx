import React, { useState } from "react";
import { IoPersonOutline, IoChevronForwardOutline } from "react-icons/io5";

import { Link, useNavigate } from "react-router-dom";
import { register } from "../auth/authService";
import { toast } from "react-toastify";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import RegSVG from "../components/RegSVG";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    password2: "",
  });

  const { name, email, phoneNumber, password, password2 } = formData;
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        phoneNumber,
        password,
      };

      const message = await register(userData);

      if (message.status === 400) {
        toast.error(message.data.message);
      } else if (message.status === 201) {
        toast.success("Registered!");
        navigate("/");
      } else {
        toast.error(message.statusText);
      }
    }
  }

  return (
    <>
      <Navbar btn={""} />
      <Flex flexDir={"column"} justifyContent="center" align={"center"}>
        <Flex width={"100%"} h={"100vh"} flexDir={"row-reverse"}>
          <Box bg={"#"} overflow={"hidden"} display={"flex"} width={"50%"}>
            <RegSVG />
          </Box>
          <Box w={"50%"} margin={"auto"}>
            <Flex
              flexDirection={"column"}
              p={"1"}
              m={"auto"}
              w={{ sm: "300px", md: "400px" }}
              gap={"2"}
            >
              <Heading
                display={"flex"}
                gap={"2"}
                alignItems={"center"}
                mb={"5"}
              >
                <IoPersonOutline /> Register
              </Heading>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type={"text"}
                  className="input"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Enter name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type={"email"}
                  className="input"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Phone number</FormLabel>
                <Input
                  type={"phoneNumber"}
                  className="input"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  placeholder="e.g. +966XXXXXXXX"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type={"password"}
                  className="input"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Confirm password</FormLabel>
                <Input
                  type={"password"}
                  className="input"
                  id="password2"
                  name="password2"
                  value={password2}
                  placeholder="Confirm password"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </FormControl>
              <Button
                type="submit"
                onClick={(e) => {
                  handleOnSubmit(e);
                }}
                bg={"black"}
                colorScheme={""}
                color={"white"}
                variant="solid"
                width={"100%"}
                mt={"3"}
                alignItems={"center"}
              >
                Register
                <IoChevronForwardOutline />
              </Button>
              <Text>
                Have an account?
                <Link
                  to={"/login"}
                  style={{ color: "gray", textDecoration: "underline" }}
                >
                  Log in
                </Link>
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default Register;
