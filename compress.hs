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
type DaySchedule = (Time, Time, Integer)
type Schedule = [DaySchedule]

exactDiv :: Int -> Maybe Int
exactDiv a b
  | a `mod` b == 0 = Just $ a `div` b
  | otherwise = Nothing

data Serialization = Compressed (Int, Int) | Notcompressed (Int, String)

compressTime :: Int -> Time -> Serialization
compressTime days (Time minutes) =
  case compress5 minutes of
    Just result -> Compressed (days, result)
    Nothing -> NotCompressed (days, show minutes)

compress5 :: Time -> Maybe Int
compress5 (Time minutes) = 

decompress5 :: Int -> Time
decompress5 compressed =

--' Produce four bits.
--' If no bits are on, the store is closed.
--' If one bit is on, use that for both the opening and the closing time.
--' If two bits are on, use
compressDay :: DaySchedule -> String
compressDay (Time opening, Time closing, days) =
  compressOpening opening
  compressClosing closing

main = do
  putStrLn $ show $ Time 302
