import riak


def setup_connection():
    return riak.RiakClient(host='172.31.20.200')


def create_bucket(client):
    return client.bucket('s20836')


def create_document(bucket, key, data):
    new_document = bucket.new(key, data)
    new_document.store()


def fetch_document(bucket, key):
    return bucket.get(key)


def delete_document(bucket, key):
    bucket.get(key).delete()


def update_data_in_document(bucket, key, new_data_key, new_data_val):
    fetched_data = bucket.get(key)
    fetched_data.data[new_data_key] = new_data_val
    fetched_data.store()


def crud_program():
    document_key = "sample_key"
    document_value = {"sample_name": "sample_name",
                      "sample_surname": "sample_surname"}

    client = setup_connection()
    bucket = create_bucket(client)
    create_document(bucket, document_key, document_value)
    fetched_data = fetch_document(bucket, document_key)
    print("*****created document******")
    print(fetched_data.data)
    assert(fetched_data.data == document_value)

    update_data_in_document(bucket, document_key, "sample_name", "new_sample_val")
    updated_fetched_data = fetch_document(bucket, document_key)
    print("*****updated document******")
    print(updated_fetched_data.data)
    assert(updated_fetched_data.data['sample_name'] == "new_sample_val")

    delete_document(bucket, document_key)
    deleted_fetched_data = fetch_document(bucket, document_key)
    print("*****deleted document******")
    print(deleted_fetched_data.data)
    assert(deleted_fetched_data.data == None)


if __name__ == "__main__":
    crud_program()