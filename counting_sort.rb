def counting_sort(array)

  counting_array = Array.new(array.max + 1, 0)
  sorted_array = Array.new(array.size, 0)

  for i in array do
    counting_array[i - 1] += 1
  end

  for i in 1..(counting_array.size - 1) do
    counting_array[i] += counting_array[i - 1]
  end

  for i in array.reverse do
    counting_array[i - 1] -= 1
    
    index = counting_array[i - 1]

    sorted_array[index] = i
  end

  sorted_array
  
end

def make_big_array(how_many)
  array = []
  for i in 0..how_many
    array << rand(1000000)
  end
  array
end

def test_counting_sort
  test_array = make_big_array(100000)
  
  if counting_sort(test_array) == test_array.sort
    puts "OK"
  else
    puts "Differ"
  end 
end


time_start = Time.now
test_counting_sort
time_end = Time.now
puts "Time elapsed #{(time_end - time_start) * 1000} milliseconds"
