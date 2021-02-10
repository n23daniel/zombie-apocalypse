import { useState } from 'react'
import axios from 'axios'
import { GetServerSideProps } from 'next'

import Header from '../components/Header'
import SurvivorCard, { Survivor } from '../components/SurvivorCard'
import SurvivorModal from '../components/SurvivorModal'
import useSurvivorFilters from '../hooks/useSurvivorFilters'

interface Props {
  initialSurvivors: Survivor[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get('https://zombie-apocalypse-kappa.vercel.app//api/survivors')

  return { props: { initialSurvivors: res?.data } }
}

export default function Home({ initialSurvivors }: Props) {
  const [survivors, setSurvivors] = useState(initialSurvivors)
  const [activeSurvivor, setActiveSurvivor] = useState(null)
  const [nameFilter, setNameFilter] = useState('')
  const [infectedFilter, setInfectedFilter] = useState(false)

  const filteredSurvivors = useSurvivorFilters(survivors, nameFilter, infectedFilter)

  const updateSurvivor = survivor => {
    const newSurvivors = [...survivors]
    const foundIndex = survivors?.length && survivors.findIndex(val => val?.id === survivor?.id)

    if (foundIndex !== -1) {
      const newSurvivor = {
        ...newSurvivors[foundIndex],
        ...survivor,
      }

      newSurvivors[foundIndex] = newSurvivor

      setActiveSurvivor(newSurvivor)
      setSurvivors(newSurvivors)
    }
  }

  return (
    <>
      <Header />
      <div className="home-page">
        <div className="home-filters">
          <div className="container">
            <div className="search-input-wrapper">
              <div className="search-input">
                <input
                  type="text"
                  placeholder="Search survivors"
                  value={nameFilter}
                  onChange={e => setNameFilter(e.target.value)}
                />
                <svg width="21px" height="21px" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Artboard" transform="translate(-1069.000000, -208.000000)" stroke="#7D7E73" strokeWidth="2"><g id="Group-5" transform="translate(563.000000, 189.000000)"><g id="Group"><g id="search" transform="translate(507.000000, 20.000000)"><path d="M18,18 L15,15" id="Path" strokeLinecap="square"></path><path d="M3,7 C3,4.23857625 5.23857625,2 8,2" id="Path"></path><circle id="Oval" strokeLinecap="square" cx="7.5" cy="7.5" r="7.5"></circle></g></g></g></g></g></svg>
              </div>
            </div>
            <div className="checkbox-input">
              <input
                type="checkbox"
                id="infectedOnly"
                checked={infectedFilter}
                onChange={() => setInfectedFilter(!infectedFilter)}
              />
              <label htmlFor="infectedOnly">Show infected only</label>
            </div>
          </div>
        </div>
        <div className="home-results">
          <div className="container">
            <div className="row">
              {
                filteredSurvivors?.length ? filteredSurvivors.map(survivor => (
                  <div className="col-md-4 col-sm-6 col-xs-12" key={survivor?.id}>
                    <SurvivorCard survivor={survivor} onClick={() => setActiveSurvivor(survivor)} />
                  </div>
                )) :
                <p className="home-results-empty-text">
                  No Results
                </p>
              }
            </div>
          </div>
        </div>
        <SurvivorModal
          isOpen={!!activeSurvivor?.id}
          onClose={() => setActiveSurvivor(null)}
          survivor={activeSurvivor}
          updateSurvivor={updateSurvivor}
        />
      </div>
    </>
  )
}

