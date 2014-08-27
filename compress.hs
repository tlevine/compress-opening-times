import qualified Data.Map as M
import Text.Printf (printf)

data Time = Time Int

instance Show Time where
  show (Time minutes) = (printf "% 2s" $ show $ minutes `div` 60) ++ ":" ++ (printf "%02s" $ show $ minutes `mod` 60)

-- A weekly schedule
--
-- A series of tuples starting with Monday, each tuple containing
-- * opening time
-- * closing time
-- * number of days to repeat
--
-- The sum of the last items of these tuples shall be seven.
type DaySchedule (Time, Time, Integer)
type Schedule = [DaySchedule]

exactDiv :: Int -> Maybe Int
exactDiv a b
  | a `mod` b == 0 = Just $ a `div` b
  | otherwise = Nothing

compressOpening :: Time -> Maybe Int
compressOpening (Time minutes) =
  case compressedOpening minutes of
    Just result && result >= 0 -> result
    Just result -> Nothing
    Nothing -> Nothing
  where
    compressedOpening x = (720 - x) `exactDiv` 30

map (\x -> 360 + (30 * x)) [0..15]

compressOpening :: Time -> Maybe Int
compressOpening

compressDay :: DaySchedule -> String
compressDay (Time opening, Time closing, days) =

main = do
  putStrLn $ show $ Time 302
