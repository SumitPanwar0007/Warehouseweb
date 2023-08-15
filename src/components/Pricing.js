import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { List, ListItem, ListItemText } from "@mui/material";
import { CardOverflow } from "@mui/joy";

function Pricing() {
  return (

    <>  

    <h1 className="text-center text-4xl text-white py-4"> Select your best <span className="text-orange-500"> Gym Plan</span> </h1>
    <Typography level="h5" textcolor="white" > asfdscdddfdfdgdsgdfhfdghfghgfhf</Typography>
    <div className="flex flex-col sm:flex-row justify-center"> 


    <Card
      variant="solid"
      color="black"
      invertedColors
      sx={{
        boxShadow: "lg",
        width: 300,
        maxWidth: "100%",
        // to make the demo resizeable
        overflow: "auto",
        resize: "horizontal",
        backgroundColor: "white",
        marginTop: "30px",
        marginLeft: "20px",
      }}
    >
      <CardOverflow
        variant="solid"
        size="lg"
        sx={{ backgroundColor: "orange", padding: "4px", textAlign: "center" }}
      >
        <Typography level="h2"> Regular Member</Typography>
        <div>
          <Typography level="h2">
            $15{" "}
            <Typography fontSize="sm" textColor="text.tertiary">
              /month
            </Typography>
          </Typography>
        </div>
      </CardOverflow>

      <div>
        <Typography level="body-md">
          <List>
            <ListItem>
              <ListItemText>Unlimited access to the Gym</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>NO Customer Support</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText> NO Personal Trainer</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>NO Standard Options</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>4 classes per week</ListItemText>
            </ListItem>
          </List>
        </Typography>
      </div>
      <CardActions>
        <Button variant="solid" sx={{ backgroundColor: "orange" }}>
          Join Now
        </Button>
      </CardActions>
    </Card>


  {/* this is card two */}

<Card
      variant="solid"
      color="black"
      invertedColors
      sx={{
        boxShadow: "lg",
        width: 300,
        maxWidth: "100%",
        
        overflow: "auto",
        resize: "horizontal",
        backgroundColor: "white",
        marginTop: "30px",
        marginLeft: "20px",
      }}
    >
      <CardOverflow
        variant="solid"
        size="lg"
        sx={{ backgroundColor: "orange", padding: "4px", textAlign: "center" }}
      >
        <Typography level="h2"> Prime Member</Typography>
        <div>
          <Typography level="h2">
            $25{" "}
            <Typography fontSize="sm" textColor="text.tertiary">
              /month
            </Typography>
          </Typography>
        </div>
      </CardOverflow>

      <div>
        <Typography level="body-md">
          <List>
            <ListItem>
              <ListItemText>Unlimited access to the Gym</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Customer Support</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Personal Trainer</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>prime Options</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>5 classes per week</ListItemText>
            </ListItem>
          </List>
        </Typography>
      </div>
      <CardActions>
        <Button variant="solid" sx={{ backgroundColor: "orange" }}>
          Join Now
        </Button>
      </CardActions>
    </Card>


{/* this is thrird card */}

<Card
      variant="solid"
      color="black"
      invertedColors
      sx={{
        boxShadow: "lg",
        width: 300,
        maxWidth: "100%",
        // to make the demo resizeable
        overflow: "auto",
        resize: "horizontal",
        backgroundColor: "white",
        marginTop: "30px",
        marginLeft: "20px",
      }}
    >
      <CardOverflow
        variant="solid"
        size="lg"
        sx={{ backgroundColor: "orange", padding: "4px", textAlign: "center" }}
      >
        <Typography level="h2"> Standard Member</Typography>
        <div>
          <Typography level="h2">
            $35{" "}
            <Typography fontSize="sm" textColor="text.tertiary">
              /month
            </Typography>
          </Typography>
        </div>
      </CardOverflow>

      <div>
        <Typography level="body-md">
          <List>
            <ListItem>
              <ListItemText>Unlimited access to the Gym</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Customer Support</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Personal Trainer</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Standard Options</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>6 classes per week</ListItemText>
            </ListItem>
          </List>
        </Typography>
      </div>
      <CardActions>
        <Button variant="solid" sx={{ backgroundColor: "orange" }}>
          Join Now
        </Button>
      </CardActions>
    </Card>  



 </div>
 </>
  );
}

export default Pricing;
