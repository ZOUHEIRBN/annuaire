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


export function get_palette(color='default'){
  if(color == 'default'){
    return [
      "#fdeeea", "#fad4cb", "#f6b7a9", "#f29a87", "#f0856d", "#ed6f53", "#eb674c", "#e85c42", "#e55239", "#e04029", "#ffffff", "#ffeeeb", "#ffc0b8","#ffa99f"
    ]
  }
}
