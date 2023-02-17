import { startTransition, useDeferredValue, useEffect, useState, useTransition } from 'react'

const ProductCards = ({ name }: { name: string }) => {
  const [products, setProducts] = useState<string[]>([])

  useEffect(() => {
    console.log(name)
    // Tính toán nặng
    const SIZE = 9999
    const result = []
    for (let i = 0; i < SIZE; i++) {
      result.push(name)
    }
    setProducts(result)
  }, [name])

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>{product}</div>
      ))}
    </div>
  )
}

export default function ProductList() {
  const [name, setName] = useState<string>('')
  const [deferredName, setDeferredName] = useState<string>('')
  const [pending, startTransition] = useTransition()

  // Khi mình gõ liên tục thì deferredName này nó sẽ bị hoãn lại một tý khi nào nó nhận thấy trả giá trị về được rồi thì deferredName trả về giá trị mới nhất
  // const deferredName = useDeferredValue(name)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setName(value)

    // Việc truyền như thế này để nói cho React biết là cập nhật cái setDeferredName(value) có độ ưu tiên thấp hơn nên là nó cập nhật setName(value) trước khi nào nó thấy phù hợp thì nó cập nhật value này
    startTransition(() => {
      setDeferredName(value)
    })
  }

  // khi mình gõ pending sẽ là true, khi ngừng gõ pending sẽ là false
  console.log('pending', pending)
  return (
    <div>
      <h1>Product List</h1>
      <input type='text' value={name} placeholder='type to render' autoFocus onChange={handleChange} />
      {pending && <div>Loading...</div>}
      {!pending && <ProductCards name={deferredName} />}
    </div>
  )
}
