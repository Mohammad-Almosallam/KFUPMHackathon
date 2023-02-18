import React, { useState } from "react";
import { toast } from "react-toastify";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Radio,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  createPreferences,
  getAllPreferences,
  updatePreferences,
} from "../auth/packageService";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth/authService";
function DrawerPref() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const btnRef = React.useRef();
  const arrayOfCrieteria = [
    "light",
    "sleep",
    "organization",
    "guests",
    "responsibility",
    "communication",
    "cleanliness",
    "temperature",
    "study",
    "quietness",
    "responsibility",
    "status",
    "smoking",
  ];
  const [formData, setFormData] = useState({
    light: "",
    sleep: "",
    organization: "",
    communication: "",
    responsibility: "",
    temperature: "",
    guests: "",
    study: "",
    cleanliness: "",
    quietness: "",
    status: "",
    smoking: "",
    description: "",
  });
  const {
    light,
    sleep,
    smoking,
    status,
    organization,
    communication,
    responsibility,
    temperature,
    guests,
    study,
    cleanliness,
    quietness,
    description,
  } = formData;

  async function handleOnSubmit(e) {
    const prefData = {
      light,
      sleep,
      smoking,
      status,
      organization,
      communication,
      responsibility,
      temperature,
      guests,
      study,
      cleanliness,
      quietness,
      description,
    };
    setFormData({
      light: "",
      sleep: "",
      organization: "",
      communication: "",
      responsibility: "",
      temperature: "",
      guests: "",
      study: "",
      cleanliness: "",
      quietness: "",
      status: "",
      smoking: "",
      description: "",
    });
    console.log(prefData);
    const token = JSON.parse(localStorage.getItem("user")).token;
    const message = await createPreferences(prefData, token);

    if (message.status === 400) {
      toast.error(message.data.message);
    } else if (message.status === 200) {
      toast.success("Pref has been created!");
    } else {
      toast.error(message.statusText);
    }
  }

  async function handleEdit(e, userId) {
    e.preventDefault();
    const allPrefs = await getAllPreferences();
    console.log(allPrefs);
    const userPref = allPrefs.filter((e) => e.user === userId);
    console.log(userPref);

    if (userPref.length === 0) {
      console.log("ee");
      handleOnSubmit(e);
      return;
    } else {
      const prefData = {
        light,
        sleep,
        smoking,
        status,
        organization,
        communication,
        responsibility,
        temperature,
        guests,
        study,
        cleanliness,
        quietness,
        description,
      };
      setFormData({
        light: "",
        sleep: "",
        organization: "",
        communication: "",
        responsibility: "",
        temperature: "",
        guests: "",
        study: "",
        cleanliness: "",
        quietness: "",
        status: "",
        smoking: "",
        description: "",
      });

      const message = await updatePreferences(prefData, userPref[0]._id);

      if (message.status === 400) {
        toast.error(message.data.message);
      } else if (message.status === 200) {
        toast.success("pref has been updated!");
      } else {
        toast.error(message.statusText);
      }
    }
  }

  return (
    <>
      <Button
        ref={btnRef}
        color={"black"}
        bgColor={"transparent"}
        border={"solid 1px black"}
        rounded={"0"}
        colorScheme={""}
        onClick={onOpen}
      >
        Preferences
      </Button>
      <Button
        ref={btnRef}
        color={"black"}
        bgColor={"transparent"}
        border={"solid 1px black"}
        rounded={"0"}
        ml={"3"}
        colorScheme={""}
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Log out
      </Button>
      <Drawer
        size={"sm"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={"4xl"} fontWeight={"bold"}>
            Preferences 🚧
            <Text fontSize={"sm"} textColor={"gray.700"} fontWeight={"light"}>
              • Rate the below according to importance
            </Text>
          </DrawerHeader>
          <DrawerBody>
            {arrayOfCrieteria.map((eachPref) => {
              return (
                <FormControl>
                  <FormLabel
                    fontWeight={"bold"}
                    className="first-letter:uppercase"
                  >
                    {eachPref}
                  </FormLabel>
                  <RadioGroup
                    onChange={(e) => {
                      setFormData((prevValue) => ({
                        ...prevValue,
                        [eachPref]: e,
                      }));
                    }}
                  >
                    <Stack
                      direction="row"
                      fontSize={"sm"}
                      textColor={"gray.700"}
                      fontWeight={"light"}
                      p={"2"}
                    >
                      <Radio pr={"10"} value="high">
                        High
                      </Radio>
                      <Radio pr={"10"} value="medium">
                        Moderate
                      </Radio>
                      <Radio pr={"10"} value="low">
                        Low
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              );
            })}
            <FormControl className="mb-3">
              <FormLabel fontWeight={"bold"}>Notes to mention</FormLabel>
              <Textarea
                onChange={(e) => {
                  setFormData((prevValue) => ({
                    ...prevValue,
                    ["description"]: e.target.value,
                  }));
                }}
                placeholder="Mention your hobbies, what you like etc..."
              />
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <Button
              mr={3}
              bg={"black"}
              variant="solid"
              width={"100%"}
              colorScheme={""}
              rounded={"none"}
              onClick={(e) => {
                handleEdit(e, user._id);
              }}
            >
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerPref;
