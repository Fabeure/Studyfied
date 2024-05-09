import { Box, Button, Grid, TextField } from "@mui/material";
import checkMarks from "../../assets/leafLogo.png";

export default function QuizPage() {
  return (
    <Box
      paddingBottom={"2rem"}
      paddingTop={"1rem"}
      paddingX={"2rem"}
      minWidth={"fit-content"}
    >
      <Grid container direction={"row"} columnGap={2}>
        <Grid
          item
          xs
          container
          rowGap={1}
          //   alignItems={"center"}
          direction={"column"}
          // bgcolor={"red"}
        >
          <Grid
            item
            // xs
            // container
            // rowGap={1}
            alignItems={"start"}
            // direction={"row"}
            // bgcolor={"cyan"}
          >
            <h1
              style={{
                // background: "yellow",
                width: "fit-content",
                fontSize: "4rem",
                fontWeight: "bold",
              }}
            >
              Test your knowledge
            </h1>
            <h1
              style={{
                // background: "lime",
                width: "fit-content",
                fontSize: "3rem",
                fontWeight: "lighter",
                fontStyle: "italic",
              }}
            >
              What's the topic ?
            </h1>
          </Grid>
          {/* <Grid
            item
            // xs={6}
            // container
            // rowGap={1}
            // alignItems={"center"}
            // direction={"row"}
            // bgcolor={"cyan"}
          >
            <h1
              style={{
                background: "lime",
                width: "fit-content",
                fontSize: "3rem",
                fontWeight: "lighter",
                fontStyle: "italic",
              }}
            >
              What's the topic ?
            </h1>
          </Grid> */}
          <Grid
            item
            // xs={6}
            container
            columnGap={6}
            alignItems={"center"}
            direction={"row"}
            // bgcolor={"cyan"}
          >
            <Grid item xs>
              <TextField
                fullWidth
                sx={{
                  [`& fieldset`]: {
                    borderRadius: 3,
                    borderStyle: "solid",
                    borderColor: "gold",
                    backgroundColor: "rgba(255,255,255,0.2)",
                  },
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                variant="contained"
                aria-placeholder="roman empire"
              >
                Generate Quiz
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={4}
          container
          //   rowGap={1}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"end"}
          height={"500px"}
          //bgcolor={"yellow"}
        >
          <Grid item>
            <img src={checkMarks} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
