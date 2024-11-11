import React, { useEffect, useRef, useState } from "react";
import "./services.css";
import ScrollReveal from "scrollreveal";
import { Link, useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";

import {
  Modal,
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  ButtonGroup,
} from "@chakra-ui/react";

function Services() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [pet, setPet] = useState("");
  const [service, setService] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setHours] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    let localToken = localStorage.getItem("token");
    setToken(localToken);
  }, []);

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal("#s1", {
      delay: 75,
      duration: 1500,
      opacity: 0,
      distance: "50%",
      origin: "left",
      reset: true,
    });

    sr.reveal("#s2", {
      delay: 100,
      duration: 1500,
      opacity: 0,
      distance: "50%",
      origin: "right",
      reset: true,
    });

    sr.reveal("#s3", {
      delay: 100,
      duration: 1500,
      opacity: 0,
      distance: "50%",
      origin: "left",
      reset: true,
    });

    sr.reveal("#s4", {
      delay: 75,
      duration: 1500,
      opacity: 0,
      distance: "50%",
      origin: "bottom",
      reset: true,
    });
  }, []);

  const handleSubmit = () => {
    const details = {
      pet,
      type_of_service: service,
      startDate,
      endTime: endDate,
      duration,
    };
    if (token) {
      console.log(details);
      fetch("https://tiny-red-armadillo-cape.cyclic.cloud/service/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(details),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      //onClose();
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="services-main-container">
      {/* Header */}
      <div className="banner">
        <div className="banner-content">
          <h2>Our Pawesome Services</h2>
          <p>
            From cozy lodging and expert training to heartwarming adoptions,
            we're here to cater to all your pet's needs. Explore our range of
            services designed with love, care, and wagging tails in mind
          </p>
        </div>
      </div>
      <div>
        <div className="services-container">
          {/* Main Content */}
          {/* Section 1 */}
          <section className="section" id="s1">
            <div className="img1"></div>
            <article>
              <h2>Boarding and Lodging</h2>
              <p>
                Our Boarding and Lodging service offers a secure, comfortable
                environment for pets when their owners are away. With various
                lodging options, including private suites and communal spaces,
                we cater to individual preferences. Our attentive staff ensures
                cleanliness and engages pets with activities. Your furry friends
                will receive the care they deserve in our home away from home.
              </p>
              <button onClick={onOpen} className="boarding">
                Book Pets Boarding
              </button>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                size="xl"
              >
                <ModalOverlay />
                <ModalContent>
                  <h2 style={{ textAlign: "center", padding: "20px" }}>
                    Book Your Slot
                  </h2>
                  <ModalCloseButton onClick={onClose} />
                  <ModalBody pb={6}>
                    <FormControl style={{ marginTop: "20px" }}>
                      <FormLabel>Pet</FormLabel>
                      <Select
                        placeholder="Select Pet"
                        value={pet}
                        onChange={(e) => setPet(e.target.value)}
                      >
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Rabbit</option>
                        <option>Birds</option>
                      </Select>
                    </FormControl>

                    <FormControl style={{ marginTop: "20px" }}>
                      <FormLabel>Service</FormLabel>
                      <Select
                        placeholder="Select Service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                      >
                        <option>Boarding and Lodging</option>
                        <option>Pet Training</option>
                      </Select>
                    </FormControl>
                    <FormControl style={{ marginTop: "20px" }}>
                      <FormLabel>Start Date</FormLabel>
                      <Input
                        type="date"
                        placeholder="Start Date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </FormControl>
                    <FormControl style={{ marginTop: "20px" }}>
                      <FormLabel>End Date</FormLabel>
                      <Input
                        type="date"
                        placeholder="Pick up"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </FormControl>
                  </ModalBody>

                  <FormControl>
                    <FormLabel style={{ paddingLeft: "26px" }}>
                      Duration hours/day
                    </FormLabel>
                    <NumberInput
                      max={24}
                      min={1}
                      style={{ width: "90%", margin: "auto" }}
                    >
                      <NumberInputField
                        value={duration}
                        onChange={(e) => setHours(e.target.value)}
                      />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>

                  {/* <ModalFooter> */}
                  <ButtonGroup
                    gap="2"
                    style={{
                      padding: "20px 15px",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                      Submit
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ButtonGroup>
                  {/* </ModalFooter> */}
                </ModalContent>
              </Modal>
            </article>
          </section>

          <section className="section" id="s2">
            <article>
              <h2>Pet Adoption: Find Your Furry Companion</h2>
              <p>
                Welcome to our Pet Adoption Center, where hearts and paws
                connect. Discover a diverse range of lovable animals eagerly
                waiting to join your family. Our adoption process is designed to
                ensure the perfect match, with each pet fully vaccinated and
                vetted. Give a forever home and experience the joy of adoption
                today..
              </p>
              <button className="adopt">
                <Link to="/pets">Adopt A Pet</Link>
              </button>
            </article>
            <div className="img2"></div>
          </section>
          {/* End Section 2 */}

          {/* Section 3 */}
          <section className="section" id="s3">
            <div className="img3"></div>
            <article>
              <h2> Pet Training: Nurturing Bonds, Shaping Behavior</h2>
              <p>
                Experience the magic of Companion's Charm Pet Training, where we
                craft well-mannered pets and foster unbreakable human-animal
                bonds. Our expert-led classes and hands-on workshops empower
                your pets with good behavior and essential commands. Join us to
                embark on a transformative journey of mutual understanding and
                lifelong companionship.
              </p>
              <button className="training" onClick={onOpen}>
                Book Slot
              </button>
            </article>
          </section>
          {/* End Section 3 */}
          {/* Footer */}
          <div className="knowmore" id="s4">
            <h2>No more loud kennels or cages</h2>
            <div className="knowmore-container">
              <div className="knowmore-item">
                <div>
                  <TiTick />
                </div>
                <div className="item-desc">
                  <h3>Loving care in your sitter's home</h3>
                  <p>
                    It's easy to find dog boarding in your city—just search your
                    zip code to see trusted sitters near you.
                  </p>
                </div>
              </div>
              <div className="knowmore-item">
                <div>
                  <TiTick />
                </div>
                <div className="item-desc">
                  <h3>Dog sitters you can trust</h3>
                  <p>
                    Every sitter profile has been individually reviewed and
                    approved by Rover and sitters on Rover have received
                    millions of 5-star reviews.
                  </p>
                </div>
              </div>
              <div className="knowmore-item">
                <div>
                  <TiTick />
                </div>
                <div className="item-desc">
                  <h3>Affordable, personalized pet care</h3>
                  <p>
                    Worried that dog boarding in a sitter’s home will be more
                    expensive than kennels? Find out how much dog sitters near
                    you typically cost.
                  </p>
                </div>
              </div>
              <div className="knowmore-item">
                <div>
                  <TiTick />
                </div>
                <div className="item-desc">
                  <h3>Easy Meet & Greets</h3>
                  <p>
                    Meet your dog's perfect match before you book. Request a
                    free in-person Meet & Greet, right from your Rover inbox.
                  </p>
                </div>
              </div>
              <div className="knowmore-item">
                <div>
                  <TiTick />
                </div>
                <div className="item-desc">
                  <h3>Cute photo updates</h3>
                  <p>
                    Millions of adorable photos have been sent through Rover!
                    Receive a pic of your dog enjoying a round of fetch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
