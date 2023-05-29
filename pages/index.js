import React from 'react'
import {Problem, FooterBanner, HeroBanner} from '../components';
import { getProblems } from '@lib/mongo/problems'

async function fetchProblems() {
  const {problems} = await getProblems()
  if (!problems) throw new Error('Failed to fetch problems')
  return problems.reverse();
}

const Home = ({problems}) => (
    <>
      <HeroBanner/>

      <div className="products-heading">
        <h1>Best Problems</h1>
        <p>Problems of many variations</p>
      </div>

      <div className="products-container">
        {problems?.map(
          (problem) => <Problem key={problem._id} problem = {problem}/>)}
      </div>

      <FooterBanner/>
        

    </>
  );

  export const getServerSideProps = async () => {
    const problems = await fetchProblems()
    return {
      props:{problems}
    }
  }


export default Home;