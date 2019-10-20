'use strict'

import React from 'react'
import styled, {injectGlobal} from 'styled-components'

import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <Header>
      <h1>Reactflix</h1>
    </Header>

    <Main>
      <VideosList>
        {Array.from({length: 10}).map((item, index) => (
          <Video key={index}>
            <VideoThumb />
            <VideoTitle>Título do Vídeo</VideoTitle>
          </Video>
        ))}
      </VideosList>
    </Main>

    <Footer>
      &copy; 2018
    </Footer>
  </Container>
)
injectGlobal`
  html, body, div[data-js="app"] {
    height: 100%;
  }
`
const headerHeight = '60px'
const footerHeight = '30px'

const Container = styled.div`
 height: 100%;
`
const Header = styled.header`
  height: ${headerHeight};
  background: #333;
`
const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`
const VideosList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Video = styled.section`
  flex: 1 1 300px;
  margin: 0 5px 5px;
`
const VideoThumb = styled.div`
  border: 1px solid #999;
  height: 150px;
`
const VideoTitle = styled.h2`
  font-size: 18px;
`
const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
`

export default App
