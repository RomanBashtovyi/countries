import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  text-align: center;
  color: var(--colors-text);
`

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`

const Message = styled.p`
  font-size: 1rem;
  opacity: 0.7;
  max-width: 400px;
  line-height: 1.5;
`

export const NoResults = ({ search, region }) => {
  const hasSearch = search && search.trim() !== ''
  const hasRegion = region && region.trim() !== ''

  let title, message

  if (hasSearch && hasRegion) {
    title = 'No countries found'
    message = `There are no countries matching "${search}" in the ${region} region.`
  } else if (hasSearch) {
    title = 'No countries found'
    message = `No countries found matching "${search}". Try a different search term.`
  } else if (hasRegion) {
    title = 'No countries in region'
    message = `There are no countries in the ${region} region.`
  } else {
    title = 'No countries available'
    message = 'No countries are currently available.'
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Message>{message}</Message>
    </Container>
  )
}
