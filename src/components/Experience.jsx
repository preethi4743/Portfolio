import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { LocationOn, CalendarToday, Work, Code } from "@mui/icons-material";
import AIMLogo from "../assets/logo/aim.jpg";
import sreenikilogo from "../assets/logo/sreenikki.jpg";
//import AdobeLogo from "../assets/logo/Adobe.jpg";

const experiences = [
  {
    id: 1,
    companyName: "AIM Technology Solutions",
    companyLogo: AIMLogo,
    startDate: "Jan 2024",
    endDate: "Present",
    location: "Fort Mill, South Carolina, United States",
    role: "Full-Stack Java Developer",
  },
  {
    id: 2,
    companyName: "Sree Nikki Solutions",
    companyLogo: sreenikilogo,
    startDate: "July 2020",
    endDate: "August 2022",
    location: "Hyderbad, United States",
    role: "Java Developer",
  },
];

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="experience"
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 8 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          color: theme.palette.primary.main,
          mb: 6,
        }}
      >
        <Work sx={{ mr: 1, verticalAlign: "middle" }} />
        Professional Experience
      </Typography>

      <Grid container spacing={4}>
        {experiences.map((exp) => (
          <Grid item xs={12} key={exp.id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "flex-start",
                padding: 3,
                borderRadius: 4,
                boxShadow: 4,
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 6,
                  transform: "scale(1.01)",
                },
              }}
            >
              <Avatar
                src={exp.companyLogo}
                alt={exp.companyName}
                sx={{
                  width: 80,
                  height: 80,
                  marginRight: isMobile ? 0 : 3,
                  marginBottom: isMobile ? 2 : 0,
                }}
              />

              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {exp.companyName}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{ mb: 2, color: theme.palette.text.secondary }}
                >
                  <Code fontSize="small" sx={{ mr: 1 }} />
                  {exp.role}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: 3,
                    color: theme.palette.text.secondary,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LocationOn fontSize="small" />
                    <Typography variant="body2">{exp.location}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CalendarToday fontSize="small" />
                    <Typography variant="body2">
                      {exp.startDate} - {exp.endDate}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;
