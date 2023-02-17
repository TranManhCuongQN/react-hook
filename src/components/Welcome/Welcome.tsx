import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import './Welcome.css'

interface ThemeType {
  theme: {
    color: 'light' | 'dark'
  }
  onChangeTheme: (color: 'light' | 'dark') => void
}

const ThemeContext = createContext<ThemeType>({
  theme: {
    color: 'light'
  },
  onChangeTheme: () => {}
})

export default function Welcome() {
  const [theme, setTheme] = useState<ThemeType['theme']>({ color: 'light' })
  const [, forceRender] = useState({})

  const onChangeTheme = useCallback((color: 'light' | 'dark') => {
    setTheme((prev) => ({ ...prev, color }))
  }, [])

  const valueContext = useMemo(() => {
    return {
      theme,
      onChangeTheme
    }
  }, [theme, onChangeTheme])

  const pleaseRender = () => forceRender({})

  return (
    // *Khi sử dụng Context để cải thiện performance ta không nên truyền value là một object
    // *Nếu trường như này mỗi lần welcome re-render thì value này nhận vào 1 object mới có tham chiếu khác hoàn toàn giá trị trước đó. Vì thế những thằng nào mà nó dùng cái context thì nó nhận ra là nhận vào 1 giá trị mới thì tôi sẽ re render lại cái component
    <div className='welcome'>
      <div>
        <button onClick={pleaseRender}>Please Render Welcome</button>
      </div>
      {/* <ThemeContext.Provider value={{ theme, onChangeTheme }}> */}
      <ThemeContext.Provider value={valueContext}>
        <Form />
        <Label />
      </ThemeContext.Provider>
    </div>
  )
}

const Label = React.memo(() => {
  const { theme, onChangeTheme } = useContext(ThemeContext)
  console.log('Label re-render')
  return (
    <label>
      <input
        type='checkbox'
        checked={theme.color === 'dark'}
        onChange={(e) => {
          onChangeTheme(e.target.checked ? 'dark' : 'light')
        }}
      />
      Use dark mode
    </label>
  )
})

const Form = () => {
  return (
    <Panel title='welcome'>
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  )
}

const Panel = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext)
  const className = `panel-` + theme.color
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

const Button = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext)
  const className = `button-` + theme.color
  return <button className={className}>{children}</button>
}
