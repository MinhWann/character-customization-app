function Avatar({ body, eyes, hair, mouth, eyebrows, glasses, clothingL1, clothingL2, clothingL3 }) {
    return (
      <div style={{ position: 'relative' }}>
        {hair.length > 0 && <img style={{ position: 'absolute', left: '0px', top: '0px', zIndex: '5' }} src={hair} alt="" width="260" />}
        {glasses.length > 0 && <img style={{ position: 'absolute', left: '0px', top: '0px', zIndex: '4' }} src={glasses} alt="" width="260" />}
        {eyebrows.length > 0 && <img style={{ position: 'absolute', left: '0px', top: '0px', zIndex: '3' }} src={eyebrows} alt="" width="260" />}
        {mouth.length > 0 && <img style={{ position: 'absolute', left: '0px', top: '0px', zIndex: '2' }} src={mouth} alt="" width="260" />}
        {eyes.length > 0 && <img style={{ position: 'absolute', left: '0px', top: '0px', zIndex: '2' }} src={eyes} alt="" width="260" />}
        {clothingL1.length > 0 && <img style={{ position: 'absolute', left: '0px', top: '0px', zIndex: '1' }} src={clothingL1} alt="" width="260" />}
        {clothingL2.length > 0 && <img style={{ position: 'absolute', left: '0px', top: '0px', zIndex: '1' }} src={clothingL2} alt="" width="260" />}
        {clothingL3.length > 0 && <img style={{ position: 'absolute', left: '0px', top: '0px', zIndex: '1' }} src={clothingL3} alt="" width="260" />}
        {body.length > 0 && <img style={{ position: 'absolute', left: '0px', top: '0px', zIndex: '0' }} src={body} alt="" width="260" />}
      </div>
  )
}

export default Avatar;