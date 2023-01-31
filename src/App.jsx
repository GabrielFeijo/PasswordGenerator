import { useState } from 'react'
import './App.css'
import { FaRegCopy } from 'react-icons/fa'
import { ColorSlider } from './slider'
import Input from './components/Input';
import SubmitButton from './components/SubmitButton';

function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(5);
  const [uppercase, setUppercase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePassword = () => {
    const defaultCharacters = 'abcdefghijklmnopqrstuvwxyz'
    const characters = {
      uppercase: defaultCharacters.toUpperCase(),
      numbers: '0123456789',
      symbols: '~!@-#$'
    }

    const characterList = [
      defaultCharacters,
      ...uppercase ? characters.uppercase : [],
      ...numbers ? characters.numbers : [],
      ...symbols ? characters.symbols : []
    ].join('')

    const pass = Array.from({ length: length }, () => Math.floor(Math.random() * characterList.length))
      .map(number => characterList[number])
      .join('')

    setPassword(pass)
  }

  const copyText = () => {
    navigator.clipboard.writeText(password)
  }


  return (

    <div className="app">
      <h2>Password Generator</h2>
      <section className="card">
        <div className='output flex'>
          <input
            type="text"
            placeholder='P4$5W0rD!'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            disabled
          />
          <FaRegCopy onClick={copyText} />
        </div>
        <div className='infos'>
          <div className='length flex'>
            <p>Comprimento da senha</p>
            <span>{length}</span>
          </div>
          <ColorSlider
            onChange={(e) => {
              setLength(e.target.value)
            }}
            min={5}
            value={length}
            max={30}
            type={'range'}
          />
          <div>
            <Input
              text="Incluir letras maiúsculas"
              name="uppercase"
              value={uppercase}
              handleOnChange={() => setUppercase(!uppercase)}
            />
            <Input
              text="Incluir números"
              name="numbers"
              value={numbers}
              handleOnChange={() => setNumbers(!numbers)}
            />
            <Input
              text="Incluir símbolos"
              name="symbols"
              value={symbols}
              handleOnChange={() => setSymbols(!symbols)}
            />
          </div>
          <SubmitButton text={'Gerar senha'} handleClick={generatePassword} />
        </div>
      </section>
      <p className='gg'>Desenvolvido por Gabriel Feijó</p>
    </div>
  )
}

export default App
