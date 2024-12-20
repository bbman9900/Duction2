import PreTextLabel from '../Labels/PreTextLabel'

import '@styles/components/ItemCardRow.css'

export default function ItemCardRow({image, texts}) {
  return (
    <div className='itemCardRow_contaier'>
      <div className='itemCardRow_leftSection'>
        <img src={image} width={"120px"} height={"120px"}/>
      </div>
      <div className='itemCardRow_rightSection'>
        {texts.map((text) =>(
          <PreTextLabel text={text} />
        ))}
      </div>
    </div>
    )
}