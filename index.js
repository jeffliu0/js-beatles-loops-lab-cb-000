function theBeatlesPlay(array_of_musicians, array_of_instruments)
{
  var empty_array = new Array()

  for(var i = 0; i < array_of_musicians.length; i++)
  {
    empty_array.push(`${array_of_musicians[i]} plays ${array_of_instruments[i]}`)
  }

  return empty_array
}
function johnLennonFacts(array)
{
  var i = 0

  while(i < array.length){
    array[i] + "!!!"
    ++i
  }
  return array
}
