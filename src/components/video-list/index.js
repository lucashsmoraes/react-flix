import React from 'react'
import styled from 'styled-components'
import Play from '../play'

const VideosList = () => (
  <Container>
    {Array.from({length: 10}).map((item, index) => (
      <Video key={index}>
        <VideoThumb >
          <PlayStyled />
        </VideoThumb>
        <VideoTitle>Título do Vídeo</VideoTitle>
      </Video>
    ))}
  </Container>
)

const PlayStyled = styled(Play)`
  fill: #999;
  height: 50px;
  width: 50px;
`
const Video = styled.section`
  &:hover ${PlayStyled} {
  transform: scale(1.5)
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  & ${Video} {
    flex: 1 1 300px;
    margin: 0 5px 5px;
  }
`

const VideoThumb = styled.div`
  align-items: center;
  border: 1px solid #999;
  display: flex;
  height: 150px;
  justify-content: center;
`
const VideoTitle = styled.h2`
  font-size: 18px;
`

export default VideosList
