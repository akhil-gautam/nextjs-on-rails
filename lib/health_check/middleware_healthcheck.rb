# frozen_string_literal: true

class MiddlewareHealthcheck
  OK_RESPONSE = [200, { 'Content-Type' => 'text/plain' }, ['I am up!']].freeze

  def initialize(app)
    @app = app
  end

  def call(env)
    if env['PATH_INFO'] == '/am-i-up'
      OK_RESPONSE
    else
      @app.call(env)
    end
  end
end
