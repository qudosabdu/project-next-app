'use client'

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ourServices = [
  {
    label: "IT Services",
    details:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.",
    more: "Learn More...",
  },
  {
    label: "Data Center & Cloud Services",
    details:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.",
    more: "Learn More...",
  },
  {
    label: "Cyber Security",
    details:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.",
    more: "Learn More...",
  },
  {
    label: "Network Services",
    details:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower growth.",
    more: "Learn More...",
  },
];

const ServiceCard = ({ service }) => (
  <Card sx={{ backgroundColor: "#2196f3", color: "white", width: "50%", marginRight: 2 }}>
    <CardContent>
      <Typography variant="h6">{service.label}</Typography>
      <Typography>{service.details}</Typography>
      <Button variant="contained" sx={{ marginTop: 2 }}>
        {service.more}
      </Button>
    </CardContent>
  </Card>
);

const ServiceCards = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Math.ceil(ourServices.length); // Adjusted for displaying two cards at once

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "space-arround", marginBottom: 6 }}>
        <Button size="small" onClick={handleBack} sx={{ color: "white" }}>
          <ArrowBackIcon />
        </Button>
        <Button size="small" onClick={handleNext} sx={{ color: "white" }}>
          <ArrowForwardIcon />
        </Button>
      </Box>
      <Box sx={{ display: "flex", width: "50%" }}>
        <SwipeableViews
          axis="x"
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {ourServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </SwipeableViews>
      </Box>
    </Box>
  );
};

export default ServiceCards;