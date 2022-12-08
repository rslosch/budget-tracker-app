class SessionsController < ApplicationController
    #login
    def create

    end

    #logout
    def destroy
        debugger
        session.clear
        head :no_content
    end

end
