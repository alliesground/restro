# require 'httparty'
require 'pg'
require 'json'

def lambda_handler(event:, context:)
  # Sample pure Lambda function

  # Parameters
  # ----------
  # event: Hash, required
  #     API Gateway Lambda Proxy Input Format
  #     Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format

  # context: object, required
  #     Lambda Context runtime methods and attributes
  #     Context doc: https://docs.aws.amazon.com/lambda/latest/dg/ruby-context.html

  # Returns
  # ------
  # API Gateway Lambda Proxy Output Format: dict
  #     'statusCode' and 'body' are required
  #     # api-gateway-simple-proxy-for-lambda-output-format
  #     Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html

  # begin
  #   response = HTTParty.get('http://checkip.amazonaws.com/')
  # rescue HTTParty::Error => error
  #   puts error.inspect
  #   raise error
  # end

  conn = PG.connect(dbname: ENV['POSTGRES_DB'], 
                    user: ENV['POSTGRES_USER'], 
                    host: ENV['POSTGRES_HOST'], 
                    port: 5432, 
                    password: '')

  # names = conn.exec( "SELECT count(*) from items" ) do |result|
  #   result.each do |row|
  #     row.values_at('name')
  #   end
  # end

  res = conn.exec( "SELECT count(*) from items" )

  {
    statusCode: 200,
    body: {
      message: "Hello Cruel world #{res[0]['count']}, #{ENV['POSTGRES_DB']}",
      # location: response.body
    }.to_json
  }
end
