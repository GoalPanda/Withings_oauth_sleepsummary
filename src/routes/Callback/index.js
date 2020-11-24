import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { requestToken, getSleepSummary } from 'withings/api'
import { Container, Button, Table, Header } from 'semantic-ui-react'
import * as moment from 'moment'

const Callback = () => {

  const [accessToken, setToken] = useState('')
  const [sleepEvents, setEvents] = useState([{
    date:'0',
    startdate: '0',
    enddate: '0',
    data: {
      deepsleepduration: '0',
      durationtowakeup: '0',
      lightsleepduration: '0',
      remsleepduration: '0',
      wakeupcount: '0',
      wakeupduration: '0',
    }
  }])

  const location = useLocation()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const code = searchParams.get('code')
    withingsToken(code)
  }, [location])

  const withingsToken = async (code) => {
    const user_info = await requestToken(code)
    setToken(user_info)
  }

  const withingsSleepSummary = async () => {
    const data = await getSleepSummary(accessToken)
    setEvents(data)
  }

  const handleSleep = (e) => {
    withingsSleepSummary()
  }

  return (
    <Container>
      <Button primary onClick={(e) => handleSleep()}>SleepSummary</Button>
      <Header>Sleep Event List</Header>
      <Table color='red'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
            <Table.HeaderCell>deepsleepduration</Table.HeaderCell>
            <Table.HeaderCell>durationtowakeup</Table.HeaderCell>
            <Table.HeaderCell>lightsleepduration</Table.HeaderCell>
            <Table.HeaderCell>remsleepduration</Table.HeaderCell>
            <Table.HeaderCell>wakeupcount</Table.HeaderCell>
            <Table.HeaderCell>wakeupduration</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {sleepEvents[0].date != '0' && sleepEvents.map((sleepEvent, index) => {
            return(
            <Table.Row>
              <Table.Cell>{sleepEvent.date}</Table.Cell>
              <Table.Cell>{moment(sleepEvent.startdate).format('DD-MM-YYYY / hh:mm:ss')}</Table.Cell>
              <Table.Cell>{moment(sleepEvent.enddate).format('DD-MM-YYYY / hh:mm:ss')}</Table.Cell>
              <Table.Cell>{sleepEvent.data.deepsleepduration}</Table.Cell>
              <Table.Cell>{sleepEvent.data.durationtowakeup}</Table.Cell>
              <Table.Cell>{sleepEvent.data.lightsleepduration}</Table.Cell>
              <Table.Cell>{sleepEvent.data.remsleepduration}</Table.Cell>
              <Table.Cell>{sleepEvent.data.wakeupcount}</Table.Cell>
              <Table.Cell>{sleepEvent.data.wakeupduration}</Table.Cell>
            </Table.Row>
          )})}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell>{`Total ${sleepEvents.length} events`}</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />
            <Table.HeaderCell />
            <Table.HeaderCell />
            <Table.HeaderCell />
            <Table.HeaderCell />
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
        </Table.Footer>
      </Table>
    </Container>
  )
}
export default Callback
