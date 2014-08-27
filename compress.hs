import Text.Printf (printf)

data Time = Time Int

instance Show Time where
  show (Time minutes) = (printf "% 2s" $ show $ minutes `div` 60) ++ ":" ++ (printf "%02s" $ show $ minutes `mod` 60)

--' A weekly schedule
--'
--' A series of tuples starting with Monday, each tuple containing
--' * opening time
--' * closing time
--' * number of days to repeat
--'
--' The sum of the last items of these tuples shall be seven.
type Schedule = [(Time, Time, Integer)]

compress :: Schedule -> String
compress (Time minutes) =

main = do
  putStrLn $ show $ Time 302
