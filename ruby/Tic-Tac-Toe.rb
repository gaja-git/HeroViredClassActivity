class Board
    attr_reader:board
    def initialize
        puts "whenever your turn is threr provide values between 0 to 8"
        puts "0 | 1 | 2"
        puts "------------"
        puts "3 | 4 | 5"
        puts "-------------"
        puts "6 | 7 | 8"
        @board = [" "," "," "," "," "," "," "," "," "]
    end
    def display(board)
        puts "#{board[0]} | #{board[1]} | #{board[2]}"
        puts "---------"
        puts "#{board[3]} | #{board[4]} | #{board[5]}"
        puts "---------"
        puts "#{board[6]} | #{board[7]} | #{board[8]}"  
            
    end
    def boardUpdate(position,sym)
        @board[position] = sym
        display(@board)
    end
end

class Players
    attr_reader :p1, :p2
    def initialize
        puts "player1:- Please enter your name"
        @p1 =gets.chomp
        puts "#{p1} is X"
        puts "player2:-Please enter your name"
        @p2 = gets.chomp
        puts "#{p2} is 0"
    end
end

class Game
    WINNING_COMBINATION =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    def initialize
     @players = Players.new
     @gameBoard = Board.new
    end

    def move
        @end=false
        @gameBoard = Board.new
      @turn=1
      while @turn<10 
        if @turn % 2 !=0
            sequence(@players.p1,"X")
        else @turn %2 ==0
            sequence(@players.p2,"O")
        end
      end
    end

    def sequence(player,sym)
        puts"#{player} (#{sym})choose a position"
        @player_move=gets.chomp.to_i
        
        if (0..8).include?(@player_move) && @gameBoard.board[@player_move] == " " && @end == false
        # if (0..8).include?(@player_move) && @gameboard.board[@player_move] == " " && @end == false
            @turn +=1
            @gameBoard.boardUpdate(@player_move,sym)
            win_check
            draw_check
        else
         puts"please enter valid option between 0 t0 8 in empty position\n"
        end
    end  
    
    def win_check
         WINNING_COMBINATION.each do |winVar|
           
            if (@gameBoard.board[winVar[0]] == @gameBoard.board[winVar[1]] && 
                    @gameBoard.board[winVar[1]] == @gameBoard.board[winVar[2]]) &&
                    @gameBoard.board[winVar[0]] != " "                 
                if @gameBoard.board[winVar[0]] == "X"
                    puts "#{@players.p1} wins"
                    @end= true
                    @turn = 10
                    draw_check
                    play_again?
                else @gameBoard.board[winVar[0]] == "O"
                        puts "#{@players.p2} wins"
                        @end= true
                        @turn =10
                        draw_check
                        play_again?
                end
            end
        end
    end

   #method to check the game draw condition
   def draw_check
    if (@turn > 9 && @end==false)
        puts "Game is draw"
        play_again?
    end
    end
    
    def play_again?
        puts "Do you want tp play again? Type Y to yes and N to exit"
        userChoice = gets.chomp
        if(userChoice == "Y" || userChoice == "y")
            move
        else
            puts "Bye Thankyou"
        end

    end

end

game = Game.new

puts game.move
