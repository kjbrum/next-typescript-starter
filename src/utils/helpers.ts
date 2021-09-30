// Retrieve a key value from an object
export function get(object, key) {
    var keys = key.split('.')

    for (var i = 0; i < keys.length; i++) {
        if (!object.hasOwnProperty(keys[i])) {
            return null
        }
        object = object[keys[i]]
    }

    return object
}

// Remove/get margin values from className
const MRE = /m[trblxy]?-/
export const getClasses = test => className => {
    return className
        ? className
              .split(' ')
              .filter(Boolean)
              .filter(x => test(x.trim() || ''))
              .join(' ')
        : ''
}
export const getMargin = getClasses(k => MRE.test(k))
export const omitMargin = getClasses(k => !MRE.test(k))

// Convert a string to kebabcase
export const toKebabCase = (str = '') => {
    if (!str) return ''

    return (
        str
            .replace(/\'/g, '')
            .match(
                /[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g
            )
            // Old
            // .match(
            //     /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
            // )
            .filter(Boolean)
            .map(x => x.toLowerCase())
            .join('-')
    )
}

// Truncate a string, without cutting off words
export const truncate = (str, max = 100, more = '...') => {
    if (str.length <= max) return str

    let trimmedString = str.substr(0, max)

    // Re-trim to avoid word cutoff
    trimmedString = trimmedString.substr(
        0,
        Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
    )

    return `${trimmedString}${more}`
}

/**
 * Throttle a function for a set number of milliseconds
 * @param {function} func Function that will be throttled
 * @param {integer} delay Number of milliseconds to throttle running the function
 * @returns {void}
 */
export const throttle = (func, delay) => {
    let inProgress = false
    return (...args) => {
        if (inProgress) return
        inProgress = true

        setTimeout(() => {
            func(...args)
            inProgress = false
        }, delay)
    }
}

/**
 * Group an array of objects by a specified key
 * @param {array} items Array of objects
 * @param {string} key Key to use for grouping
 * @returns {object}
 */
export const groupByKey = (items, key) => {
    return items.reduce(
        (result, item) => ({
            ...result,
            [item[key]]: [...(result[item[key]] || []), item],
        }),
        {}
    )
}

/**
 * Sort an object alphabetically by keys
 * @param {object} items Object to be sorted
 * @returns {object}
 */
export const sortByKeys = items => {
    return Object.keys(items)
        .sort()
        .reduce((obj, key) => {
            obj[key] = items[key]
            return obj
        }, {})
}

// Parse YouTube or Vimeo URLs
export const parseVideoUrl = {
    parse: function (url) {
        // - Supported YouTube URL formats:
        //   - http://www.youtube.com/watch?v=My2FRPA3Gf8
        //   - http://youtu.be/My2FRPA3Gf8
        //   - https://youtube.googleapis.com/v/My2FRPA3Gf8
        // - Supported Vimeo URL formats:
        //   - http://vimeo.com/25451551
        //   - http://player.vimeo.com/video/25451551
        // - Also supports relative URLs:
        //   - //player.vimeo.com/video/25451551

        const parts = url.match(
            /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
        )

        let type = 'other'
        let allow = null
        if (parts) {
            if (parts[3].indexOf('youtu') > -1) {
                type = 'youtube'
                allow =
                    'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            } else if (parts[3].indexOf('vimeo') > -1) {
                type = 'vimeo'
                allow = 'autoplay; fullscreen'
            }
        }

        return {
            type,
            url,
            id: type === 'other' ? null : parts[6],
            allow,
        }
    },

    // Returns an embed URL
    createEmbed: function (url) {
        const parsedUrl = this.parse(url)

        if (parsedUrl.type == 'youtube') {
            return '//www.youtube.com/embed/' + parsedUrl.id
        } else if (parsedUrl.type == 'vimeo') {
            return '//player.vimeo.com/video/' + parsedUrl.id
        }

        return parsedUrl.url
    },

    // Returns a thumbnail image
    getThumbnail: function (url) {
        const parsedUrl = this.parse(url)
        let thumbUrl

        switch (parsedUrl.type) {
            case 'youtube':
                thumbUrl =
                    '//img.youtube.com/vi/' +
                    parsedUrl.id +
                    '/maxresdefault.jpg'
                break
            case 'vimeo':
                thumbUrl = '//i.vimeocdn.com/video/' + parsedUrl.id + '_640.jpg'
                break
            default:
                thumbUrl = ''
                break
        }

        return thumbUrl
    },
}
