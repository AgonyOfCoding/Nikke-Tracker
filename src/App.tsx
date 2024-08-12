import { useEffect, useState } from 'react';
import './App.css';
import AppNavbar from './components/navbar/appNavbar';
import TeamsNavbar from './components/teams/teamsNavbar';
import { useDispatch } from 'react-redux';
import { CollectionItem, Equipment, Nikke, TeamsData } from './types';
import axios from 'axios';
import { initializeInvestments } from './state/investment';
import { initializeTeamsData } from './state/teamsState';
import NITContent from './components/nitContent';

const transformInvestmentData = ( data: any[] ): Nikke[] => {
  const transformedData: Nikke[] = [];

  Object.values(data).forEach(nikke => {
      transformedData.push({
          id: nikke.id as string,
          core: nikke.core as number,
          bond: nikke.bond as number,
          equipment: nikke.equipment as Equipment,
          skill_levels: nikke.skill_levels as number[],
          collection_item: nikke.collection_item as CollectionItem | undefined,
          favorite: nikke.favorite as boolean
      });
  });

  return transformedData;
};

const transformTeamsData = ( data: any ): TeamsData => {
  const transformedData: TeamsData = data as TeamsData;

  return transformedData;
};

function App() {
  const [nikke_investment_data, setNikkeInvestmentData] = useState<Nikke[] | null>(null);
  const [teams_data, setNikkeTeamsData] = useState<TeamsData | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchInvestmentData = async () => {
        try {
            const response = await axios.get('/api/investmentData');
            const investments = transformInvestmentData(response.data);
            setNikkeInvestmentData(investments);
            dispatch(initializeInvestments(investments));
        } catch (error) {
            console.error('Error fetching investment data:', error);
        }
    };
    const fetchTeamsData = async () => {
        try {
            const response = await axios.get('/api/teamData');
            const teams = transformTeamsData(response.data);
            setNikkeTeamsData(teams);
            dispatch(initializeTeamsData(teams));
        } catch (error) {
            console.error('Error fetching investment data:', error);
        }
    };
    fetchInvestmentData();
    fetchTeamsData();
  }, [dispatch]);

  if (!nikke_investment_data || !teams_data) {
    return <div style={{marginTop: 100}}>Loading...</div>;
  }

  return (
    <div className="App" >
      <AppNavbar />
      <TeamsNavbar />
      <div>
        <NITContent />
      </div>
    </div>
  );
}

export default App;
