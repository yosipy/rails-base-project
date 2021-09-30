module ApplicationHelper
  def javascript_bundle_tag(name)
    javascript_include_tag(manifest["#{name}.js"], defer: true)
  end

  private

    def manifest
      @manifest ||= load
    end

    def load
      manifest_path = Rails.root.join('public', 'packs', 'manifest.json')
      if manifest_path.exist?
        JSON.parse(manifest_path.read)
      else
        {}
      end
    end
end
