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
    const cardData=[
      {
        type:'Regular Member',
        Cost:'15',
        access:'Unlimited access to the Gym',
        support:'NO Customer Support',
        trainer:'NO Personal Trainer',
        locker:'NO Standard Options',
        classes:'4 classes per week'

      },
      {
        type:'Prime Member',
        Cost:'25',
        access:'Unlimited access to the Gym',
        support:'Limited Customer Support',
        trainer:'Personal Trainer',
        locker:'Standard Options',
        classes:'5 classes per week'

      },
      {
        type:'Standard Member',
        Cost:'35',
        access:'Unlimited access to the Gym',
        support:'Full Customer Support',
        trainer:'Personal Trainer',
        locker:'Standard Options',
        classes:'6 classes per week'

      }
    ]
  return (

    <>  

    <h1 className="text-center text-4xl text-white py-4"> Select your best <span className="text-orange-500"> Gym Plan</span> </h1>
   <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', padding:'15px',
                    '@media (max-width:600px)':{  flexDirection:'column',justifyContent:'center', alignItems:'center' }}}>



      {
      cardData.map((data)=>{
        return(
          <Card
                variant="solid"
                color="black"
                invertedColors
               
                sx={{
                  fontWeight:'bold',
                padding:'10px',
                width: '30vw',
                  '@media (max-width:600px)':{width:'60vw' },
               
                // to make the demo resizeable
                overflow: "auto",
               
                
                marginTop: "30px",
                marginLeft: "20px",
              
      }}
    >
      <CardOverflow
        variant="solid"
        size="lg"
        sx={{ backgroundColor: "orange", padding: "4px", textAlign: "center" }}
      >
        <Typography level="h2">{data.type}</Typography>
        <div>
          <Typography level="h2">
            ${data.Cost}{" "}
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
              <ListItemText>{data.access}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>{data.support}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>{data.trainer}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>{data.options}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>{data.classes}</ListItemText>
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


        )
      })}
    



 </Box>
 </>
  );
}

export default Pricing;
