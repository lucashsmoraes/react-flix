'use strict'
import React from 'react'
import styled from 'styled-components'

const VideosSingle = () => (
  <Container>
    <Iframe width='560' height='450' src='https://www.youtube.com/embed/H9Kg3vcsKEg' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
    <Title>Título do Vídeo</Title>
  </Container>
)

const Container = styled.div`
  display: flex;  
  justify-content: center;
  flex-direction: column;
`
const Iframe = styled.iframe`
  background: #000;
  border: 0;
  border-bottom: 1px solid #999;
  margin-bottom: 10px;
  width: 100%;
`
const Title = styled.h2`
  padding: 10px;
`

export default VideosSingle
