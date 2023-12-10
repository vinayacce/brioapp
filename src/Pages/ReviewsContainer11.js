import { Grid, Box } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Item(props) {
  return (
    <Paper sx={{ height: '40vh' }}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">
        Check it out!
      </Button>
    </Paper>
  )
}

function showTransmission(isDeskTopDevice, deskTopitems, mobileitems){
  if (!isDeskTopDevice) {
    return mobileitems.map((item, i) => <Item key={i} item={item} />)
 } else {
    return deskTopitems.map((item, i) => <Grid container spacing={1}><Grid item xs><Item key={i} item={item[0]} /></Grid> <Grid item xs><Item key={i} item={item[1]} /></Grid></Grid>)
 }
}
function ReviewContainer(props) {
  var deskTopitems = [
    [
      {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
      },
      {
        name: "Random Name #11",
        description: "Hello World!"
      },
      {
        name: "Random Name #11",
        description: "Hello World!"
      }
    ]
    ,
    [
      {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
      },
      {
        name: "Random Name #11",
        description: "Hello World!"
      },
      {
        name: "Random Name #11",
        description: "Hello World!"
      }
    ],
    [
      {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
      },
      {
        name: "Random Name #11",
        description: "Hello World!"
      },
      {
        name: "Random Name #11",
        description: "Hello World!"
      }
    ],
    [
      {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
      },
      {
        name: "Random Name #11",
        description: "Hello World!"
      },
      {
        name: "Random Name #11",
        description: "Hello World!"
      }
    ],
    [
      {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
      },
      {
        name: "Random Name #11",
        description: "Hello World!"
      },
      {
        name: "Random Name #11",
        description: "Hello World!"
      }
    ]
  ]

  var mobileitems = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #11",
      description: "Hello World!"
    }
    ,
    {
      name: "Random Name #2",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #22",
      description: "Hello World!"
    }
    ,

    {
      name: "Random Name #2",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #22",
      description: "Hello World!"
    }
    ,

    {
      name: "Random Name #2",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #22",
      description: "Hello World!"
    }
    ,

    {
      name: "Random Name #2",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #22",
      description: "Hello World!"
    }

  ]

  return (
    <Grid sx={{ height: '48vh', paddingTop: '1vh', backgroundColor: 'blue' }}>
      <Grid item sx={{ height: '43vh', padding: '0.5vh' }}>
        <Carousel
          next={() => {/* Do stuff */ }}
          prev={() => {/* Do other stuff */ }}
        >
         {showTransmission(props.isDeskTopDevice, deskTopitems, mobileitems )}
        </Carousel>
      </Grid>
    </Grid>

  );
}

export default ReviewContainer;