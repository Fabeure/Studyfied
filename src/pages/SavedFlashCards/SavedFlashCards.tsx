import { Grid, Paper, styled } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from 'react-router-dom';
import './SavedFlashCards.css'
import axios from 'axios';
import { FlashcardModel } from '../../models/flashcardModel';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));

const getSavedFlashCardsEndpoint = `${process.env.VITE_BACKEND_API}/api/FlashCards/getFlashCardsByUserId`;
  
function SavedFlashCards() {
    const { user } = useContext(AuthContext);
    const [savedSets, setSavedSets] = useState<FlashcardModel[]>([]);
    const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          userId: encodeURIComponent(user?.userId),
        };

        const response = await axios.get(getSavedFlashCardsEndpoint, { params });
        console.log(response.data)
        const fetchedSets = response.data.resultItem as FlashcardModel[]; // Cast to FlashcardModel[] for type safety
        console.log(fetchedSets)
        setSavedSets(fetchedSets);
        console.log("result: ", savedSets)
      } catch (err) {
        console.error("Error fetching saved flash cards:", err);
        alert("An error occurred while fetching your saved sets. Please check the console for details.");
      }
    };

    fetchData();
  }, [user]);

  return (
    <div className='content'>
    <Grid
    container
    direction={"row"}
    columnGap={2}
    rowGap={2}
    justifyContent={"center"}>
        {savedSets.map((savedSet) =>
        <Grid
        item
        xs={3}
        key={savedSet.id}>
                <Item onClick={() => {navigate('/flashcards', {state:{savedFlashCard: savedSet}})}}>
                  {Object.keys(savedSet.items)[0]}
                  
                </Item>
        </Grid>
        )}
    </Grid>
    </div>
  );
}

export default SavedFlashCards;
