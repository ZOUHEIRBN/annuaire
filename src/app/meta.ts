export function get_default_palette() {
  var bodyStyles = window.getComputedStyle(document.body);
  console.log(bodyStyles.getPropertyValue('--primary'))


  return [
    {
      backgroundColor: 'rgba(105,159,177,0.2)',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },
    {
      backgroundColor: 'rgba(77,20,96,0.3)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ]
}
const PRIMARY_PALETTE = [
  "#fdeeea", "#fad4cb", "#f6b7a9", "#f29a87", "#f0856d", "#ed6f53", "#eb674c", "#e85c42", "#e55239", "#e04029", "#ffffff", "#ffeeeb", "#ffc0b8","#ffa99f"
]
const ACCENT_PALETTE = [
  "#e5f1f4", "#bfdce3", "#94c5d0", "#69adbd", "#489caf", "#288aa1", "#248299", "#1e778f", "#186d85", "#0f5a74", "#a7e6ff", "#74d8ff", "#41c9ff", " #28c2ff"
]

const THIRD_PALETTE = [
  "#e9f4ea","#c8e3ca"," #a4d0a7","#7fbd84","#63af69","#48a14f", "#419948", "#388f3f", "#308536", "#217426"," #b3ffb7","#80ff87"," #4dff56"," #34ff3e"
]

export function get_palette(color='primary'){

  color = color.toLowerCase()

  if(['primary', 'default'].includes(color)){
    return PRIMARY_PALETTE
  }
  else if(color == 'accent'){
    return ACCENT_PALETTE
  }
  else if(color == 'third'){
    return THIRD_PALETTE
  }

  else {
    let splice_idx = 10
    let mixin_table = []

    if(color.includes('primary')){
      mixin_table.push(PRIMARY_PALETTE.slice(0, splice_idx))
    }
    if(color.includes('accent')){
      mixin_table.push(ACCENT_PALETTE.slice(0, splice_idx))
    }
    if(color.includes('third')){
      mixin_table.push(THIRD_PALETTE.slice(0, splice_idx))
    }


    let new_palette = []

    for(let i=0; i < mixin_table.length*splice_idx; i++){
      let rnd = Math.floor(mixin_table.length*Math.random())
      if(!mixin_table[rnd]){
        mixin_table.splice(rnd)
        continue
      }
      let c = mixin_table[rnd].splice(-1)[0]
      if(Math.random() > .5){
        new_palette.push(c)
      }
      else {
        new_palette.unshift(c)
      }


    }



    console.log(new_palette)

    return new_palette


  }

  return PRIMARY_PALETTE
}


export function make_palette(plot_kind='', color='default') {
  let colors = get_palette(color)
  let X = []

  let color_f = (c) => {
    return  {
      backgroundColor: c,
      borderColor: c,
    }
  }
  if(plot_kind.toLowerCase() == 'bar'){
    color_f = (c) => {
      return  {
        backgroundColor: c,
        borderColor: c,
        pointBackgroundColor: c,
        pointBorderColor: '#fafafa',
        pointHoverBackgroundColor: '#fafafa',
        pointHoverBorderColor: c
      }
    }

    for(let i = 2; i < colors.length; i+=2)
    {
      X.push(color_f(colors[i]))
    }
  }
  else {
    let palette = get_palette(color).slice(0, 10)

    X.push({
      backgroundColor: palette,
      borderColor: [...palette.slice(5, 10), ...palette.slice(0, 5)]
   })
  }



  return X
}
